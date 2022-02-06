import { useForm } from 'react-hook-form';

const Search = ({ placeholder, array, onKeyUp, advanced }: Props) => {
  const { register, watch } = useForm();
  const inputText = watch('search') || 'a';
  const filterResults = () => {
    const filtered = array.filter((item) => {
      if (advanced) {
        return item._string.includes(inputText.toLowerCase());
      } else {
        return item.title.toLowerCase().includes(inputText.toLowerCase());
      }
    });
    onKeyUp(filtered);
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        {...register('search', { required: true })}
        onKeyUp={filterResults}
      />
    </div>
  );
};
interface Props {
  placeholder: string;
  array: any[];
  onKeyUp: (e: any) => void;
  advanced: boolean;
}

export default Search;
