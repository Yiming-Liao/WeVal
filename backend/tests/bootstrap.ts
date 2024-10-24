import { assert } from '@japa/assert'
import { apiClient } from '@japa/api-client'
import app from '@adonisjs/core/services/app'
import type { Config } from '@japa/runner/types'
import { pluginAdonisJS } from '@japa/plugin-adonisjs'
import testUtils from '@adonisjs/core/services/test_utils'
import env from '#start/env'
import ace from '@adonisjs/core/services/ace'
import { authApiClient } from '@adonisjs/auth/plugins/api_client'

/**
 * This file is imported by the "bin/test.ts" entrypoint file
 */

/**
 * Configure Japa plugins in the plugins array.
 * Learn more - https://japa.dev/docs/runner-config#plugins-optional
 */
export const plugins: Config['plugins'] = [
  assert(),
  apiClient({ baseURL: `http://${env.get('HOST')}:${env.get('PORT')}` }), // BACKEND_URL
  pluginAdonisJS(app),
  authApiClient(app),
]

/**
 * Configure lifecycle function to run before and after all the
 * tests.
 *
 * The setup functions are executed before all the tests
 * The teardown functions are executed after all the tests
 */
export const runnerHooks: Required<Pick<Config, 'setup' | 'teardown'>> = {
  setup: [
    async () => {
      console.log('▶️')
      try {
        await ace.exec('migration:run', [])
        console.info('\x1b[35m資料庫遷移完成\x1b[0m') // 35m 為 紫色
      } catch (error) {
        console.error('\x1b[31m資料庫遷移失敗：', error, '\x1b[0m') // 31m 為 紅色
        throw error
      }
    },
  ],
  teardown: [
    async () => {
      const truncate = await testUtils.db().truncate()
      await truncate()
      console.info('\x1b[35m資料庫清理完成\x1b[0m') // 35m 為 紫色
      console.log('⏹')
    },
  ],
}

/**
 * Configure suites by tapping into the test suite instance.
 * Learn more - https://japa.dev/docs/test-suites#lifecycle-hooks
 */
export const configureSuite: Config['configureSuite'] = (suite) => {
  if (['browser', 'functional', 'e2e'].includes(suite.name)) {
    return suite.setup(() => testUtils.httpServer().start())
  }
}

// Reporters
export const reporters: Config['reporters'] = {
  activated: ['spec'],
}
