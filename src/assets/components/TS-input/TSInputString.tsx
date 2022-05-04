import TSInput from "./TSInput"
import styles from "./TSInput.module.css"

export default function TSInputString(props: {
  data: string
  type?: string
  onClick?: (e: string) => void | string
}) {
  return (
    <TSInput {...props} fromString={(from) => from}>
      <div class={styles.ShowText}>
        {props.data}
        <div class={styles.ShowText + " " + styles.TransShowText}>{props.data}</div>
      </div>
    </TSInput>
  )
}
