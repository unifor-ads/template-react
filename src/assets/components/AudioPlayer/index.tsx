import { createContext, useState, useEffect, useRef, useContext } from 'react';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

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
			}}
		>
			<div className='audio-player'>
				<div className='inner'>
					<DisplayTrack />
					<Controls />
					<ProgressBar />
				</div>
			</div>
		</AudioContext.Provider>
	);
}

export default AudioPlayer;
