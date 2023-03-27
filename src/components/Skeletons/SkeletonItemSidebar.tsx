import ContentLoader from 'react-content-loader'

const SkeletonItemSidebar = () => {
	return (
		<ContentLoader
			speed={4}
			width={400}
			height={100}
			viewBox='0 0 400 100'
			backgroundColor='#a4a2a2'
			foregroundColor='#ecebeb'
		>
			<rect x='26' y='8' rx='5' ry='5' width='87' height='86' />
			<rect x='47' y='46' rx='0' ry='0' width='5' height='18' />
			<rect x='120' y='10' rx='0' ry='0' width='168' height='21' />
			<rect x='120' y='40' rx='0' ry='0' width='168' height='34' />
		</ContentLoader>
	)
}

export default SkeletonItemSidebar
