import Image from "next/image"
function Logo(props: any) {
    const { renderDefault, title } = props;
    return (
        <div className="flex items-center space-x-2">
            <img
                className="rounded-full object-cover"
                height={50}
                width={50}
                src="https://res.cloudinary.com/newztrakerapplication/image/upload/v1671436983/pwmbz5fpzai1bifyvsxn.jpg"
                alt="logo" />
                <>{renderDefault(props)}</>
        </div>
    )
}

export default Logo