import ProductCard from "./productCard";

export default function TrendingProducts() {
    return (
        <div>
            <h1>Trending Products</h1>

            <ProductCard name="Mac Book Air" price="150,000" image="https://picsum.photos/id/1/200/300" />

            <ProductCard name="Dell XPS" price="120,000" image="https://picsum.photos/id/2/200/300" />

            <ProductCard name="HP Spectre" price="130,000" image="https://picsum.photos/id/3/200/300" />

            <ProductCard name="Lenovo ThinkPad" price="140,000" image="https://picsum.photos/id/4/200/300" />
        </div>
    )
}