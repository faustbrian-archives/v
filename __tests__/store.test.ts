import "jest-extended";
import { StubStore } from "./stubs/store";

const items: number[] = [...Array(5).keys()];
const itemsBool: boolean[] = new Array(5).fill(true);

let store: StubStore<number>;
beforeEach(() => (store = new StubStore<number>()));

it("should put an item into the store", () => {
	expect(store.put(1)).toBeTrue();
});

it("should put many items into the store", () => {
	expect(store.putMany(items)).toEqual(itemsBool);
});

it("should be missing all items from the store", () => {
	for (const item of items) {
		expect(store.missing(item)).toBeTrue();
	}
});

it("should remove an item from the store", () => {
	expect(store.put(1)).toBeTrue();
	expect(store.forget(1)).toBeTrue();
});

it("should remove many items from the store", () => {
	expect(store.putMany(items)).toEqual(itemsBool);
	expect(store.forgetMany(items)).toEqual(itemsBool);
});

it("should remove all items from the store", () => {
	expect(store.putMany(items)).toEqual(itemsBool);
	expect(store.flush()).toBeTrue();
});
