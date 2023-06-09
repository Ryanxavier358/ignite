interface ButtonProps {
  title: string
}

export function Button(props: ButtonProps) {
  return (
    <p>
      teste
      {props.title}
    </p>
  )
}
