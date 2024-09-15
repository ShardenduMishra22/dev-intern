import '../index.css';
import { Swords } from 'lucide-react';

interface CardProps {
  title: string;
  text: string;
}

function Card({ title, text }: CardProps) {
  return (
    <div className="card w-full mt-14 relative">
      <div className="flex flex-col items-center py-8 relative z-10">
        <span className="icon -mt-10"> 
          <Swords className='p-4 w-24 h-24 border-2 rounded-full text-violet-500' />
        </span>

        <div className="flex flex-col gap-4 text-2xl text-center mt-8">
          <h4 className='font-bold'>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
      
      <div className="shine"></div>
      <div className="background absolute inset-0 z-0">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
}

export default Card;
