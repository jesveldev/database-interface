
export default function BackgroundLogo(props){
	return(
		<figure id={ props.containerId }>
			<img src={ props.mainImgSrc } id={ props.mainImgId } alt={ props.alt }/>
			<img src={ props.backImgSrc } id={ props.backImgId } alt={ props.alt }/>
		</figure>
	);
}