import { MusicImg } from "./MusicImg";
import { MusicCardContent } from "./MusicCardContent";
import { MusicTitle } from "./MusicTitle";
import { MusicDescription } from "./MusicDescription";
import { Card } from "../base/Card";

export interface MusicCardProps {
	imgSrc: string;
	title: string;
	description: string;
	href: string;
}

export const MusicCard = ({imgSrc, title, description, href}: MusicCardProps) => {
	return (
		<div className="col">
			<div className="music-card">
				<a href={href}>
					<MusicImg src={imgSrc} />
					<MusicCardContent title={title} description={description} />
				</a>
			</div>
		</div>
	);
}