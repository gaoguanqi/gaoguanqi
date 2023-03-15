
const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}
---
### My GitHub Contributions    
![](https://raw.githubusercontent.com/gaoguanqi/gaoguanqi/main/assets/github-contribution-grid-snake.svg)
<!--
**gaoguanqi/gaoguanqi** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->

   <img align="right" src="https://github-readme-stats.vercel.app/api?username=gaoguanqi&theme=vue&show_icons=true&hide_title=true"/>

   [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=gaoguanqi&theme=vue&layout=compact)](https://github.com/gaoguanqi)
   
<img src="https://github-profile-trophy.vercel.app/?username=gaoguanqi&theme=flat&column=7" alt="logo" align="center" style="margin: auto; margin-bottom: 20px;" /
