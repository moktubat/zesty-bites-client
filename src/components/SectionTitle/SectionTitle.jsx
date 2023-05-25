
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-3/12 mx-auto text-center py-3">
            <p className="text-[#D99904] italic text-xl pb-2">---{subHeading}---</p>
            <h3 className="uppercase text-4xl text-black border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;