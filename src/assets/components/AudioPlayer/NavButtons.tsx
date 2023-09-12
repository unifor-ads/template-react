import { useRef, useState, useEffect, useCallback, useContext } from 'react';
import {
	IoPlayBackFill,
	IoPlayForwardFill,
	IoPlaySkipBackFill,
	IoPlaySkipForwardFill,
	IoPlayFill,
	IoPauseFill,
} from '../Icons';
import { AudioContext } from '.';

const NavButtons = () => {
	const [isPlaying, setIsPlaying] = useState(false);

	const {
		audioRef,
		progressBarRef,
		duration,
		setTimeProgress,
		skipForward,
		skipBackward,
		handlePrevious,
		handleNext,
	} = useContext(AudioContext);

	const togglePlayPause = () => {
		setIsPlaying((prev) => !prev);
	};

	const playAnimationRef = useRef<number>();

	const repeat = useCallback(() => {
		if (!audioRef.current) return;
		if (!progressBarRef.current) return;
		const currentTime = audioRef.current.currentTime;
		setTimeProgress(currentTime);
		progressBarRef.current.value = currentTime.toString();
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, duration, progressBarRef, setTimeProgress]);

	useEffect(() => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [isPlaying, audioRef, repeat]);

	return (
		<div className='audio-nav-buttons'>
			<button onClick={handlePrevious}>
				<IoPlaySkipBackFill />
			</button>
			<button onClick={skipBackward}>
				<IoPlayBackFill />
			</button>

			<button onClick={togglePlayPause}>
				{isPlaying ? <IoPauseFill /> : <IoPlayFill />}
			</button>
			<button onClick={skipForward}>
				<IoPlayForwardFill />
			</button>
			<button onClick={handleNext}>
				<IoPlaySkipForwardFill />
			</button>
		</div>
	);
};
export default NavButtons;
