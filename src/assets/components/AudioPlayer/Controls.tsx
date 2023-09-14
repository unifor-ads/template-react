import NavButtons from './NavButtons';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';

const Controls = () => {
	return (
		<div className='audio-controls'>
			<div className='audio-nav-buttons-and-volume'>
				<NavButtons />
				<VolumeControl />
			</div>
			<ProgressBar />
		</div>
	);
};

export default Controls;
