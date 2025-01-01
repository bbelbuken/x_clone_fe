const Form = ({ tweet, setTweet, image }) => {
  const handleInputChange = (e) => {
    setTweet(e.target.value);
    autoResize(e.target);
  };

  const autoResize = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <form className="relative flex w-full min-w-0 flex-1 items-center justify-start bg-none pt-3 text-[20px] font-normal tracking-[0.010em]">
      <label htmlFor="newPost" className="w-full">
        <textarea
          type="text"
          id="newPost"
          name="newPost"
          placeholder="What is happening?!"
          value={tweet}
          onChange={handleInputChange}
          rows={1}
          className="max-h-[720px] min-h-6 w-full resize-none overflow-hidden border-none bg-transparent bg-none px-0.5 leading-6 placeholder-[#71767B] outline-none"
        />
      </label>
    </form>
  );
};

export default Form;
