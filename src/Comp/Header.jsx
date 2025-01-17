import moment from "moment";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-2">
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;