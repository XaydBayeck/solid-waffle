import { Component, createMemo, createSignal, JSXElement } from "solid-js"

import styles from "./App.module.css"
import TSInputString from "./assets/components/TS-input/TSInputString"

const App: Component = () => {
  const [data, setData] = createSignal("Jack")

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <TSInputString data={data()} onClick={(e: string) => setData(e)} />
      </header>
    </div>
  )
}

export default App
