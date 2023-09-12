import { useContext } from 'react';
import { AudioContext } from '.';

interface progressBarProps {
	progressBarRef: React.RefObject<HTMLInputElement>;
	audioRef: React.RefObject<HTMLAudioElement>;
	timeProgress: number;
	duration: number;
}

const ProgressBar = () => {
	const { progressBarRef, audioRef, timeProgress, duration } = useContext(AudioContext);

	const handleProgressChange = () => {
		if (!progressBarRef.current) return;
		if (!audioRef.current) return;
		audioRef.current.currentTime = parseInt(progressBarRef.current.value);
	};

	const formatTime = (time: number) => {
		if (time && !isNaN(time)) {
			const minutes = Math.floor(time / 60);
			const seconds = Math.floor(time % 60);
			const formatMinutes = minutes.toString().padStart(2, '0');
			const formatSeconds = seconds.toString().padStart(2, '0');
			return `${formatMinutes}:${formatSeconds}`;
		}
		return '00:00';
	};

	return (
		<div className='timebar'>
			<span className='time current'>{formatTime(timeProgress)}</span>
			<input
				type='range'
				defaultValue='0'
				min='0'
				max={duration.toString()}
				ref={progressBarRef}
				onChange={handleProgressChange}
			/>
			<span className='time'>{formatTime(duration)}</span>
		</div>
	);
};
export default ProgressBar;
