export default function Galleria() {
    return (
        <main className="w-full h-[calc(100vh - 100px)] bg-gradient-to-b from-[#F3F3F3] to-[#fff] p-[20px] lg:p-[50px]">
            <h2 className="lg:text-[42px] mb-6 text-center"> Galleria </h2>
            
            <div className="flex gap-16">
                <div className="w-1/5 bg-gray-300">LEFT</div>
                <div className="w-4/5 bg-gray-300">RIGHT</div>
            </div>
        </main>
    )
}
