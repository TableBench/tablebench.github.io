- 成品：https://starnight531.github.io/leaderboard/
# 本地依赖项：
- 下载npm工具后使用npm将react-scripts下载到当前目录下：

  ```bash
  npm install react-scripts
  ```
- 也可以下载到全局：

  ```bash
  npm -g install react-scripts
  ```

- 由于上传到github已经是html文件，所以该依赖项加入了.gitignore

# 本地构建html：

- 在项目总目录下运行

  ```bash
  npm run build
  ```
- 构建好的网页是build目录下的 index.html & leaderboard.html
  可能遇到mv重命名结果多空格情况，在文件夹下删除空格即可

# 网页细节：
- 网站数据在 src/mocks 下，每个json文件对应一个网页
- 网页样式在 src/index.tsx 下，分出六个标签都在leaderboardLib.tsx下

# Action部署：
- 私有仓库需要付费，公开仓库确保 Settings > Pages > Build and deployment > Source 变为 GitHub Actions
- 在Actions上选择Node.js，点击Set up this workflow
- 在workflows下yml文件中描述好绑定的分支，新的修改后如何变动，部署流程等，参考https://docs.github.com/en/actions
