import { IoMusicNoteBeamed } from '../Icons';
import { useContext } from 'react';
import { AudioContext } from '.';

const DisplayTrack = () => {
	const { currentTrack, audioRef, setDuration, progressBarRef, handleNext } =
		useContext(AudioContext);

	const onLoadedMetadata = () => {
		if (!audioRef || !audioRef.current) return;
		if (!progressBarRef || !progressBarRef.current) return;
		const seconds: number = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds.toString();
	};

	return (
		<div>
			<audio
				src={currentTrack.src}
				ref={audioRef}
				onLoadedMetadata={onLoadedMetadata}
				onEnded={handleNext}
				// controls
			/>
			<div className='audio-info'>
				<div className='audio-avatar'>
					{currentTrack.thumbnail ? (
						<img src={currentTrack.thumbnail} alt='audio avatar' />
					) : (
						<div className='icon-wrapper'>
							<span className='audio-icon'>
								<IoMusicNoteBeamed />
							</span>
						</div>
					)}
				</div>
				<div className='audio-text'>
					<p className='title'>{currentTrack.title}</p>
					<p>{currentTrack.artist}</p>
				</div>
			</div>
		</div>
	);
};
export default DisplayTrack;
