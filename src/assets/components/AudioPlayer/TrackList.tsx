import { useContext } from 'react';
import { AudioContext, trackProps } from '.';

const TrackList = () => {
	const { tracks, setCurrentTrack } = useContext(AudioContext);

	return (
		<div className='audio-table-container'>
			<table className='audio-table table table-hover'>
				<tbody>
					{tracks.map((track: trackProps, index: number) => (
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
		</div>
	);
};

export default TrackList;
