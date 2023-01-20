
export default function Button(props) {
  return (
    <button
    	id={ props.buttonId }
    	className={ props.buttonClass }
    	onClick={props.buttonFunction}
    >
    	{props.children}

    </button>
  );
}