import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 ampere 组件库</h1>
        <p>ampere 是学习慕课网课程的组件库</p>
        <h3>安装试试</h3>
        <code>
          npm install ampere --save
        </code>
      </>
    )
  }, { info : { disable: true }})