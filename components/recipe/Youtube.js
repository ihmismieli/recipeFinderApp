import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import { useRoute } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Youtube() {

    const route = useRoute();
    const { videoId } = route.params;

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <View>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={videoId}
                onChangeState={onStateChange}
            />
            <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
    );
}

