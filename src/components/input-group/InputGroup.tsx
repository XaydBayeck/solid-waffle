import styles from "./InputGroup.module.css"

export default function InputGroup(props: {
  type?: string
  back: () => void
  value?: string
  onInput?: (
    e: InputEvent & {
      currentTarget: HTMLInputElement
      target: Element
    }
  ) => void
  submit: () => void
}) {
  return (
    <div class={styles.InputGroup}>
      <span class={styles.ReturnBottun} onclick={props.back}>◀</span>
      <input
        class={styles.Input}
        type={props.type || "text"}
        value={props.value}
        onInput={props.onInput}
      ></input>
      <button class={styles.Submit} onClick={props.submit}>
        提交
      </button>
    </div>
  )
}
