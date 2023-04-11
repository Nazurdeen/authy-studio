import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  // ...
  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'My Netlify deploys',
            sites: [
              {
                title: 'sanity plugin dashboard widget netlify',
                apiId: '6255ad27-d65a-4934-9017-7617396507cb',
                buildHookId: 'https://api.netlify.com/build_hooks/6434ecdb0ffc987707e9aec9',
                name: 'monumental-medovik-49667c',
                url: 'https://monumental-medovik-49667c.netlify.app/',
              }
            ]
        })
      ]
    })
  ]
})