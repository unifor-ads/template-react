import { Section } from '@/assets/components/Section';
import { tracks } from '@/assets/mockData/tracks';
import { trackProps } from '@/assets/components/AudioPlayer';

import './Search.css';

const Search = () => {
	return (
		<Section>
			<div className='search-container'>
				<table className='search-audio-table table table-hover'>
					<tbody>
						{tracks.map((track: trackProps, index: number) => (
							// <tr onClick={() => setCurrentTrack(tracks[index])}>
							<tr>
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
		</Section>
	);
};

export default Search;
