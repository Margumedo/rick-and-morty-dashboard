import { CardSummary } from './components/CardSummary'
import { MonitorPlay, Rocket, UsersRound } from "lucide-react";
import { LastCharacters } from './components/LastCharacters';
import { LastEpisodes } from './components/LastEpisodes';



export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4" >Dashbord</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <CardSummary
          icon={UsersRound}
          total='12.450'
          average={15}
          title="Personajes Humanos"
          tootltipText="Ver la cantidad total de humanos"
        />

        <CardSummary
          icon={Rocket}
          total='86.5%'
          average={80}
          title="Personajes Alienigenas"
          tootltipText="Ver la cantidad total de alienigenas"
        />

        <CardSummary
          icon={MonitorPlay}
          total='363.95$'
          average={30}
          title="Episodios"
          tootltipText="Ver la cantidad total de episodios"
        />
      </div>

      <div className='grid grid-cols-1 mt-12 md:grid-cols-2 md:gap-x-5 lg:gap-x-20'>
        <LastCharacters />
        <LastEpisodes />
      </div>
    </div>
  );
}
