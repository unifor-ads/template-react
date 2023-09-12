import { useContext } from 'react';
import { AudioContext } from '.';

const TrackList = () => {
	const { tracks, setCurrentTrack } = useContext(AudioContext);

	return (
		<table className='audio-table table mt-2'>
			<tbody>
				{tracks.map((track, index) => (
					<tr onClick={() => setCurrentTrack(tracks[index])}>
						<td className='text-align-center'>{index}</td>
						<td>
							<div className='audio-cover'>
								<img src={track.thumbnail}></img>
							</div>
						</td>
						<td className='text-align-start'>
							{track.title} - {track.artist}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TrackList;
