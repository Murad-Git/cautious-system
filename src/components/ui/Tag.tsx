import { Button } from './Button';

interface Props {
  featured?: boolean;
  newJob?: boolean;
}
export const Tag = ({ featured, newJob }: Props) => {
  if (newJob) {
    return (
      <Button variant='outline' className='uppercase'>
        new!
      </Button>
    );
  }
  if (featured) {
    return (
      <Button variant='outline' className='btn-outline-black uppercase'>
        featured
      </Button>
    );
  } else {
    return (
      <Button variant='outline' className='uppercase'>
        new!
      </Button>
    );
  }
};
