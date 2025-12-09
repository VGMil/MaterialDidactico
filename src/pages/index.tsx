import Layout from '@theme/Layout'
import React from 'react'
import styles from './index.module.css'
import Intro from '../../docs/Intro.mdx'

function index() {
  return (
    <Layout title='Abstract' description='Home'>
      <main className={styles.container}>
        <Intro />
      </main>
    </Layout>
  )
}

export default index

