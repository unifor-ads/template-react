import { createContext, useState, useEffect, useRef, useContext } from 'react';
import DisplayTrack from './DisplayTrack';
import TrackList from './TrackList';

import './AudioPlayer.css';
import Controls from './Controls';

export const AudioContext = createContext<any>(null);

export interface trackProps {
	title: string;
	artist: string;
	thumbnail?: string;
	src: string;
	href: string;
}

interface audioProviderProps {
	tracks: trackProps[];
}

export function AudioPlayer({ tracks }: audioProviderProps) {
	const [trackIndex, setTrackIndex] = useState(0);
	const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

	const [timeProgress, setTimeProgress] = useState(0);
	const [duration, setDuration] = useState(0);

	const audioRef = useRef<HTMLAudioElement>(null);
	const progressBarRef = useRef<HTMLInputElement>(null);

	const skipForward = () => {
		if (!audioRef.current) return;
		audioRef.current.currentTime += 15;
	};

	const skipBackward = () => {
		if (!audioRef.current) return;
		audioRef.current.currentTime -= 15;
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

	return (
		<AudioContext.Provider
			value={{
				trackIndex,
				setTrackIndex,
				currentTrack,
				setCurrentTrack,
				timeProgress,
				setTimeProgress,
				duration,
				setDuration,
				tracks,
				audioRef,
				progressBarRef,
				skipForward,
				skipBackward,
				handlePrevious,
				handleNext,
			}}
		>
			<div className='audio-player'>
				<DisplayTrack />
				<Controls />
				<TrackList />
			</div>
		</AudioContext.Provider>
	);
}

export default AudioPlayer;
