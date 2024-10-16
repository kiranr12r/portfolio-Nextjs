import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="w-full py-20">
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id} // Using item.id for a unique key
                        title={item.title}
                        description={item.description}
                        className={item.className} // Ensure this className is correctly passed
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
