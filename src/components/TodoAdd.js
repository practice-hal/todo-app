export const TodoAdd = ({
    placeholder,
    leftIcon,
    buttonText,
    inputEl,
    handleAddTodoListItem
}) => {
    return (
        <>
            <textarea
                placeholder={placeholder}
                bgcolor="white"
                mt="8"
                bordercolor="gray.400"
                ref={inputEl}
            />
            <button
                onClick={handleAddTodoListItem}
                colorscheme="blue"
                lefticon={leftIcon}
                mt="8"
            >
                {buttonText}
            </button>
        </>
    );
};
