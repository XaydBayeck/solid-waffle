import { createSignal, JSXElement, Match, Switch } from "solid-js"
import InputGroup from "../input-group/InputGroup"
import styles from "./TSInput.module.css"

interface Props<T> {
  data: T
  type?: string
  onClick?: (e: T) => void | string
  children?: JSXElement
  fromString: (from: string) => T
}

/**
 * 一个可以在视图模式和输入模式切换的组件函数
 * @param data 用来显示的数据
 * @return JSXElement
 */
export default function TSInput<T extends { toString(): string }>(props: Props<T>) {
  enum Mode {
    SHOW,
    INPUT,
  }
  const [mode, setMode] = createSignal(Mode.SHOW)
  var state = {
    value: props.data,
    fromString: props.fromString,
  }

  return (
    <div className={styles.TSInput}>
      <Switch>
        <Match when={mode() == Mode.SHOW}>
          <div class={styles.ShowBox} onclick={() => setMode(Mode.INPUT)}>
            {props.children}
          </div>
        </Match>
        <Match when={mode() == Mode.INPUT}>
          <InputGroup
            type={props.type}
            back={() => setMode(Mode.SHOW)}
            value={state.value.toString()}
            onInput={(e) => {
              state = { ...state, value: state.fromString(e.currentTarget.value) }
            }}
            submit={() => {
              setMode(Mode.SHOW)
              props.onClick!(state.value)
            }}
          />
        </Match>
      </Switch>
    </div>
  )
}
