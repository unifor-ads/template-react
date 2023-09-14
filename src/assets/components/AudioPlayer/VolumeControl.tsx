import { useContext, useEffect, useState } from 'react';
import { IoVolumeUpFill, IoVolumeDownFill, IoVolumeMuteFill } from '../Icons';
import { AudioContext } from '.';

const VolumeControl = () => {
	const { audioRef } = useContext(AudioContext);

	const [volume, setVolume] = useState(100);
	const [muteVolume, setMuteVolume] = useState(false);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume / 100;
			audioRef.current.muted = muteVolume;
		}
	}, [volume, audioRef, muteVolume]);

	return (
		<div className='audio-volume'>
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
	);
};

export default VolumeControl;
