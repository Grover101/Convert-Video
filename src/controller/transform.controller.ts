class TransformManager {
    async webmtomp4(file) {
        try {
            return 'webmtomp4'
        } catch (error) {
            throw error
        }
    }

    async mp4towebm(file) {
        try {
            return 'mp4towebm'
        } catch (error) {
            throw error
        }
    }

    async mutevideos(file) {
        try {
            return 'mutevideos'
        } catch (error) {
            throw error
        }
    }
}

export default new TransformManager()
