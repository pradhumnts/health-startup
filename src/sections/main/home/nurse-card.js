import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { Box, Stack, Avatar, IconButton, ListItemText } from "@mui/material";

import SvgColor from "src/components/svg-color";

export default function NurseCard({ nurse }) {
    const theme = useTheme();

    const avatarContainerStyles = {
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        alignItems: "center"
    };

    const avatarBoxStyles = {
        border: "1px solid",
        borderColor: theme.palette.grey[300],
        padding: "2px",
        width: "fit-content",
        borderRadius: "56px"
    };

    const avatarStyles = {
        width: 56,
        height: 56,
    };

    const infoContainerStyles = {
        alignItems: "center"
    };

    const secondaryInfoStyles = {
        flexDirection: "row",
        gap: "8px"
    };

    const secondaryItemStyles = {
        flexDirection: "row",
        gap: "4px",
        alignItems: "center"
    };

    const iconStyles = {
        width: 18,
        height: 18,
    };

    const primaryTypographyProps = {
        noWrap: true,
        typography: 'subtitle1',
    };

    const secondaryTypographyProps = {
        mt: 0.5,
        noWrap: true,
        display: 'flex',
        component: 'span',
        alignItems: 'center',
        typography: 'body2',
        color: 'text.disabled',
    };

    const iconButtonStyles = {
        marginLeft: "auto"
    };

    return (
        <Stack>
            <Stack sx={avatarContainerStyles}>
                <Box sx={avatarBoxStyles}>
                    <Avatar src={nurse.picture} sx={avatarStyles} />
                </Box>
                <Stack sx={infoContainerStyles}>
                    <ListItemText
                        primary={nurse.name}
                        secondary={
                            <Stack sx={secondaryInfoStyles}>
                                <Stack sx={secondaryItemStyles}>
                                    <SvgColor src="/assets/icons/untitled/ic-mingcute_location-fill.svg" sx={iconStyles} />
                                    {nurse.distanceInKMs} KMs
                                </Stack>
                                <Stack sx={secondaryItemStyles}>
                                    <SvgColor src="/assets/icons/untitled/ic-solar_user-check-01.svg" sx={iconStyles} />
                                    {nurse.specialization}
                                </Stack>
                            </Stack>
                        }
                        primaryTypographyProps={primaryTypographyProps}
                        secondaryTypographyProps={secondaryTypographyProps}
                    />
                </Stack>
                <IconButton sx={iconButtonStyles}>
                    <SvgColor sx={{
                        width: 28,
                        height: 28,
                        color: theme.palette.primary.main,
                    }} src="/assets/icons/untitled/ic-solar_call.svg" />
                </IconButton>
            </Stack>
        </Stack>
    )

}

NurseCard.propTypes = {
    nurse: PropTypes.object
};