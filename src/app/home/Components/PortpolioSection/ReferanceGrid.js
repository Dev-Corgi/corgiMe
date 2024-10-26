import ProjectReferance from "@/app/home/Components/PortpolioSection/ProjectReferance";
import PortpolioImage_1 from "@Image/Portpolio_1.png";
import PortpolioImage_2 from "@Image/Portpolio_2.png";
import PortpolioImage_3 from "@Image/Portpolio_3.png";
import PortpolioImage_4 from "@Image/Portpolio_4.png";
import PortpolioImage_5 from "@Image/Portpolio_5.png";

import booksight_thumb from "@Image/booksight_thumb.png"
import booksight_1 from "@Image/booksight_1.png"
import booksight_2 from "@Image/booksight_2.png"
import booksight_3 from "@Image/booksight_3.png"
import booksight_4 from "@Image/booksight_4.png"

import damatcon_thumb from "@Image/damatcon_thumb.png"
import damatcon_1 from "@Image/damatcon_1.png"
import damatcon_2 from "@Image/damatcon_2.png"
import damatcon_3 from "@Image/damatcon_3.png"
import damatcon_4 from "@Image/damatcon_4.png"

import messenger_thumb from "@Image/messenger_thumb.png"
import messenger_1 from "@Image/messenger_1.png"
import messenger_2 from "@Image/messenger_2.png"
import messenger_3 from "@Image/messenger_3.png"
import messenger_4 from "@Image/messenger_4.png"

import ecotrip_thumb from "@Image/ecotrip_thumb.png"
import ectrip_1 from "@Image/ecotrip_1.png"

import blit_thumb from "@Image/blit_thumb.png"
import blit_1 from "@Image/blit_1.png"

export default function ReferanceGrid() {
	const booksight_images=[
		booksight_1,
		booksight_2,
		booksight_3,
		booksight_4,
	]

	const damatcon_images=[
		damatcon_1,
		damatcon_2,
		damatcon_3,
		damatcon_4,
	]

	const messenger_images=[
		messenger_1,
		messenger_2,
		messenger_3,
		messenger_4,
	]
	
	const blit_images=[
		blit_1
	]
	
	const ecotrip_images=[
	    ectrip_1
	]
	
	return (
		<div className="flex flex-col mt-16 gap-14 md:mt-52 lg:gap-32 xl:gap-40">
		<div className="flex flex-col gap-14 md:flex-row md:gap-11 md:items-end lg:gap-14 xl:gap-24">
			<ProjectReferance
				className=" h-80 md:w-88 md:h-112 lg:w-128 lg:h-144 xl:w-184 xl:h-200"
				title="Booksight"
				highlight="i"
				backgroundSrc={booksight_thumb}
				images={booksight_images}
        year="2024"
        role="UI/UX 및 프론트 엔드"
			></ProjectReferance>
			<ProjectReferance
							className="h-80 md:w-64 md:h-80 lg:w-80 lg:h-96 xl:w-104 xl:h-120"
							title="Ecotrip"
							highlight="r"
							backgroundSrc={ecotrip_thumb}
					year="2022"
					role="UI/UX, 및 프론트 엔드"
					images={ecotrip_images}
			></ProjectReferance>
		</div>
		<div className="flex flex-col items-center">
			<ProjectReferance
				className="h-80 md:w-88 md:h-104 lg:w-120 lg:h-136 xl:w-176 xl:h-168"
				title="담앗콘"
				backgroundSrc={damatcon_thumb}
				images={damatcon_images}
        year="2022"
        role="프론트 엔드"
			></ProjectReferance>
		</div>
		<div className="flex flex-col gap-14 md:flex-row md:justify-center">
			<ProjectReferance
							className="h-80 md:w-64 md:h-72 md:mt-60 lg:w-80 lg:h-88 xl:w-112 xl:h-120"
							title="Blit"
							highlight="i"
							backgroundSrc={blit_thumb}
					year="2021"
					role="프론트 엔드"
					images={blit_images}
			></ProjectReferance>
			<ProjectReferance
				className="h-80 md:w-96 md:h-112 lg:w-136 lg:h-144 xl:w-192 xl:h-200"
				title="Messenger"
				highlight="n"
				backgroundSrc={messenger_thumb}
				images={messenger_images}
        year="2021"
        role="프론트 엔드"
			></ProjectReferance>
		</div>
	</div>
	);
}
