// ==UserScript==
// @name         Twitch Reward Autoclaim
// @namespace    http://github.com/
// @version      0.0.3
// @description  A Tampermonkey script that automatically claims Twitch channel point rewards
// @author       mets11rap
// @homepage     https://github.com/mets11rap/twitch-reward-autoclaim/
// @icon         https://static.twitchcdn.net/assets/favicon-32-d6025c14e900565d6177.png
// @match        https://www.twitch.tv/*
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

GM_config.init({
  id: 'TRACfg',
  title: 'Twitch Autoclaim Settings',
  fields: {
    interval: {
      label: 'Check Interval (seconds)',
      type: 'number',
      default: 15
    }
  }
})

GM_registerMenuCommand('Configure TRA', () => GM_config.open())

function main () {
  const buttons = document.getElementsByClassName('tw-full-height tw-relative tw-z-above')

  for (const button of buttons) {
    const clickables = button.getElementsByClassName('tw-button tw-button--success tw-interactive')

    for (const clickable of clickables) clickable.click()
  }
}

setInterval(main, GM_config.get('interval') * 1000)
