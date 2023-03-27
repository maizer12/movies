import ContentLoader from 'react-content-loader'

const SkeletonItemSlider = ( ) => {
	return (
		<ContentLoader
			speed={4}
			width={245}
			height={380}
			viewBox='0 0 245 380'
			backgroundColor='#a4a2a2'
			foregroundColor='#ecebeb'
		>
			<rect x='9' y='9' rx='0' ry='0' width='221' height='268' />
			<rect x='10' y='285' rx='0' ry='0' width='221' height='39' />
			<rect x='10' y='339' rx='0' ry='0' width='221' height='36' />
		</ContentLoader>
	)
}

export default SkeletonItemSlider;