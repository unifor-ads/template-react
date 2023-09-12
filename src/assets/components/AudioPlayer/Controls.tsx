import { useRef, useState, useEffect, useCallback, useContext } from 'react';
import { trackProps } from '.';
import {
	IoPlayBackFill,
	IoPlayForwardFill,
	IoPlaySkipBackFill,
	IoPlaySkipForwardFill,
	IoPlayFill,
	IoPauseFill,
	IoVolumeUpFill,
	IoVolumeDownFill,
	IoVolumeMuteFill,
} from '../Icons';
import { AudioContext } from '.';

interface controlsProps {
	audioRef: React.RefObject<HTMLAudioElement>;
	progressBarRef: React.RefObject<HTMLInputElement>;
	duration: number;
	setTimeProgress: Function;
	tracks: trackProps[];
	trackIndex: number;
	setTrackIndex: Function;
	setCurrentTrack: Function;
}

const Controls = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(100);
	const [muteVolume, setMuteVolume] = useState(false);

	const {
		audioRef,
		progressBarRef,
		duration,
		setTimeProgress,
		tracks,
		trackIndex,
		setTrackIndex,
		setCurrentTrack,
	} = useContext(AudioContext);

	const togglePlayPause = () => {
		setIsPlaying((prev) => !prev);
	};

	const handlePrevious = () => {
		if (!audioRef.current) return;
		//Retorna ao início da música caso esteja com mais de 3 segundos de progresso.
		if (audioRef.current.currentTime > 3) {
			audioRef.current.currentTime = 0;
		} else {
			if (trackIndex === 0) {
				let lastTrackIndex = tracks.length - 1;
				setTrackIndex(lastTrackIndex);
				setCurrentTrack(tracks[lastTrackIndex]);
			} else {
				setTrackIndex((prev: number) => prev - 1);
				setCurrentTrack(tracks[trackIndex - 1]);
			}
		}
	};

	const handleNext = () => {
		if (trackIndex >= tracks.length - 1) {
			setTrackIndex(0);
			setCurrentTrack(tracks[0]);
		} else {
			setTrackIndex((prev: number) => prev + 1);
			setCurrentTrack(tracks[trackIndex + 1]);
		}
	};

	const skipForward = () => {
		if (!audioRef.current) return;
		audioRef.current.currentTime += 15;
	};

	const skipBackward = () => {
		if (!audioRef.current) return;
		audioRef.current.currentTime -= 15;
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

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume / 100;
			audioRef.current.muted = muteVolume;
		}
	}, [volume, audioRef, muteVolume]);

	return (
		<div className='controls-wrapper'>
			<div className='controls'>
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
			<div className='volume'>
				<button onClick={() => setMuteVolume((prev) => !prev)}>
					{muteVolume || volume < 5 ? (
						<IoVolumeMuteFill />
					) : volume < 40 ? (
						<IoVolumeDownFill />
					) : (
						<IoVolumeUpFill />
					)}
				</button>
				<input
					type='range'
					min={0}
					max={100}
					value={volume}
					onChange={(e) => setVolume(parseInt(e.target.value))}
				/>
			</div>
		</div>
	);
};
export default Controls;
