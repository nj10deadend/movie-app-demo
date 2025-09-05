import {
    Image, 
    // StyleSheet,
    Text,
    TouchableOpacity,
    View 
} from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/interfaces';
import { useRouter, Link } from 'expo-router';

// interface MovieCardProps {
//     title: string;
//     releaseDate: string;
//     overview?: string;
//     posterUrl: string;
//     averageRating: number;
// }

const MovieCard = ({
    id,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
}: Movie) => {
    const roundedRating = Math.round(vote_average * 100) / 100;
    // console.log('MovieCard props:', { vote_average, overview, poster_path, release_date, title });
    const posterUrl = poster_path 
        ? `https://image.tmdb.org/t/p/w500${poster_path}` 
        : 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=';
    // console.log('Poster URL:', posterUrl);
    const router = useRouter();

    const handlePress = () => {
        router.push(`/movies/${id}`);
    }
    return (
        <Link
            // href='/movies/[id]'
            href={{ pathname: '/movies/[id]', params: { id: String(id) } }}
            asChild
        >
            <View style={{ margin: 'auto'}} className="flex-column items-center rounded-full px-5 py-5">
                <Text className="font-semibold text-lg">{title}</Text>
                <Text className="text-sm text-gray-600">{release_date}</Text>
                {/* <Text className="text-sm text-gray-800 mt-2">{overview}</Text> */}
                <Text className="text-sm text-yellow-500 mt-2">Rating: {roundedRating}/10</Text>
                {/* <Image source={{ uri: posterUrl }} className="w-full h-40 rounded-lg"/> */}
                <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
                    <Image 
                        source={{ uri: posterUrl }} 
                        style={{ width: 200, height: 300 }} // Fixed dimensions are required for Image component
                        className="rounded-lg"
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>

        </Link>
    )
}

export default MovieCard;

// const styles = StyleSheet.create({})