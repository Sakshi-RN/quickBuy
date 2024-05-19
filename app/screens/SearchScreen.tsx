import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AxiosSearchProductByNameAsync } from "../services/ProductsApi";
import { Product } from "../types/data";
import ProductHCard from "../components/product/ProductHCard";

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<Product[]>([]);

    // Function to simulate search with a delay
    const simulateSearch = async (query: string) => {
        const response = await AxiosSearchProductByNameAsync(query);
        setSearchResults(response.data);
    };

    const handleInputChange = (text: string) => {
        if (text === "") {
            setSearchQuery(text);
            setSearchResults((prev) => []);
            return;
        }
        setSearchQuery(text);
        simulateSearch(text);
    };

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleInputChange}
                    value={searchQuery}
                    placeholder={`"Search for Juices"`}
                    keyboardType="default"
                    autoFocus
                />
            </View>
            <View>
                <ScrollView directionalLockEnabled showsVerticalScrollIndicator={false}>
                    {
                        searchResults?.map((item, index) => {
                            return <ProductHCard key={item._id} product={item} />
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    input: {
        borderRadius: 5,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 20,
        backgroundColor: "#f4f4f6",
    },
});
