# lamp
my ionic study

1.创建ionic项目 ，使用默认的tab模板
`ionic start lamp`
```
默认目录：
   |_hooks/
   |_node_modules/
   |_plugins/
   |_resources/
   |_src/
       |_app/
       |_assets/
       |_pages/
           |_about/
           |_contact/
           |_home/
           |_tabs/
       |_theme
   |_www/
   |_.editorconfig
   |_.gitignore
   |_config.xml
   |_ionic.config.json
   |_package.json
   |_tsconfig.json
   |_tslint.json

```

2.修改tab状态栏（文字和图标）
D:\workplace\lamp\src\pages\tabs\tabs.html --tab text
D:\workplace\lamp\src\pages\tabs\tabs.html ---tab icon
D:\workplace\lamp\src\app\app.module.ts    --module
D:\workplace\lamp\src\pages\               --add module page

3.添加menu菜单页面
D:\workplace\lamp\src\app\app.html   		--add menu button and icon
D:\workplace\lamp\src\app\app.component.ts  --(Nav , ViewChild , ...)
D:\workplace\lamp\src\app\app.module.ts   	--module-list
D:\workplace\lamp\src\pages\               --add module page - list

4.添加android开发平台
`ionic platform add android`

5.