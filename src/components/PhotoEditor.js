import photo from "../assests/Picsagar.png"

const PhotoEditor = () => {
    return(
        <div className="relative">
            <img className="" src={photo}></img>
            <div className="absolute top-8 right-8 z-1 bg-[#E5E7EB] w-[280px] h-[320px]"></div>
        </div>
    )
}

export default PhotoEditor;