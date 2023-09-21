import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbarhome = () => {
  const navigate = useNavigate();

  const onDivframer11lg61rContainerClick = useCallback(() => {
    navigate("/admin-try");
  }, [navigate]);

  const onEquipmentsTextClick = useCallback(() => {
    navigate("/smart");
  }, [navigate]);

  const onOrdersTextClick = useCallback(() => {
    navigate("/orders");
  }, [navigate]);

  const onIconUserClick = useCallback(() => {
    navigate("/admin-profile");
  }, [navigate]);

  const onUsersTextClick = useCallback(() => {
    navigate("/userprofile-admin");
  }, [navigate]);

  return (
    <div className="relative bg-gray-400 w-[1461px] h-20 text-left text-17xl text-dwhite font-popins">
      <div
        className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_708.5px)] w-[236px] flex flex-row pt-[7px] px-0 pb-[3px] box-border items-center justify-between cursor-pointer"
        onClick={onDivframer11lg61rContainerClick}
      >
        <img
          className="relative w-[278px] h-[82px] object-cover"
          alt=""
          src="/maxresdefault-31@2x.png"
        />
      </div>
      <div className="absolute top-[10px] left-[368px] w-[1031px] h-[57px] overflow-hidden">
        <div
          className="absolute top-[3px] left-[0px] capitalize font-extrabold flex items-center w-[276px] h-[54px] cursor-pointer"
          onClick={onEquipmentsTextClick}
        >
          Equipment's
        </div>
        <div
          className="absolute top-[3px] left-[327px] capitalize font-extrabold flex items-center w-[154px] h-[54px] cursor-pointer"
          onClick={onOrdersTextClick}
        >
          Orders
        </div>
        <div className="absolute top-[3px] left-[513px] capitalize font-extrabold flex items-center w-[155px] h-[54px]">
          add
        </div>
        <img
          className="absolute h-full w-[6.6%] top-[0%] right-[0%] bottom-[0%] left-[93.4%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="/-icon-user1.svg"
          onClick={onIconUserClick}
        />
        <div
          className="absolute top-[3px] left-[742px] capitalize font-extrabold flex items-center w-[130px] h-[54px] cursor-pointer"
          onClick={onUsersTextClick}
        >
          Users
        </div>
      </div>
    </div>
  );
};

export default Navbarhome;
