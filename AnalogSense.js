const keys = [
    { "name": "Escape", "wooting": 0x29, "razer": 0x6E },
    { "name": "F1", "wooting": 0x3A, "razer": 0x70 },
    { "name": "F2", "wooting": 0x3B, "razer": 0x71 },
    { "name": "F3", "wooting": 0x3C, "razer": 0x72 },
    { "name": "F4", "wooting": 0x3D, "razer": 0x73 },
    { "name": "F5", "wooting": 0x3E, "razer": 0x74 },
    { "name": "F6", "wooting": 0x3F, "razer": 0x75 },
    { "name": "F7", "wooting": 0x40, "razer": 0x76 },
    { "name": "F8", "wooting": 0x41, "razer": 0x77 },
    { "name": "F9", "wooting": 0x42, "razer": 0x78 },
    { "name": "F10", "wooting": 0x43, "razer": 0x79 },
    { "name": "F11", "wooting": 0x44, "razer": 0x7A },
    { "name": "F12", "wooting": 0x45, "razer": 0x7B },
    { "name": "`", "wooting": 0x35, "razer": 0x01 },
    { "name": "1", "wooting": 0x1E, "razer": 0x02 },
    { "name": "2", "wooting": 0x1F, "razer": 0x03 },
    { "name": "3", "wooting": 0x20, "razer": 0x04 },
    { "name": "4", "wooting": 0x21, "razer": 0x05 },
    { "name": "5", "wooting": 0x22, "razer": 0x06 },
    { "name": "6", "wooting": 0x23, "razer": 0x07 },
    { "name": "7", "wooting": 0x24, "razer": 0x08 },
    { "name": "8", "wooting": 0x25, "razer": 0x09 },
    { "name": "9", "wooting": 0x26, "razer": 0x0A },
    { "name": "0", "wooting": 0x27, "razer": 0x0B },
    { "name": "-", "wooting": 0x2D, "razer": 0x0C },
    { "name": "=", "wooting": 0x2E, "razer": 0x0D },
    { "name": "Backspace", "wooting": 0x2A, "razer": 0x0F },
    { "name": "Tab", "wooting": 0x2B, "razer": 0x10 },
    { "name": "Q", "wooting": 0x14, "razer": 0x11 },
    { "name": "W", "wooting": 0x1A, "razer": 0x12 },
    { "name": "E", "wooting": 0x08, "razer": 0x13 },
    { "name": "R", "wooting": 0x15, "razer": 0x14 },
    { "name": "T", "wooting": 0x17, "razer": 0x15 },
    { "name": "Y", "wooting": 0x1C, "razer": 0x16 },
    { "name": "U", "wooting": 0x18, "razer": 0x17 },
    { "name": "I", "wooting": 0x0C, "razer": 0x18 },
    { "name": "O", "wooting": 0x12, "razer": 0x19 },
    { "name": "P", "wooting": 0x13, "razer": 0x1A },
    { "name": "[", "wooting": 0x2F, "razer": 0x1B },
    { "name": "]", "wooting": 0x30, "razer": 0x1C },
    { "name": "Enter", "wooting": 0x28, "razer": 0x2B },
    { "name": "Caps Lock", "wooting": 0x39, "razer": 0x1E },
    { "name": "A", "wooting": 0x04, "razer": 0x1F },
    { "name": "S", "wooting": 0x16, "razer": 0x20 },
    { "name": "D", "wooting": 0x07, "razer": 0x21 },
    { "name": "F", "wooting": 0x09, "razer": 0x22 },
    { "name": "G", "wooting": 0x0A, "razer": 0x23 },
    { "name": "H", "wooting": 0x0B, "razer": 0x24 },
    { "name": "J", "wooting": 0x0D, "razer": 0x25 },
    { "name": "K", "wooting": 0x0E, "razer": 0x26 },
    { "name": "L", "wooting": 0x0F, "razer": 0x27 },
    { "name": ";", "wooting": 0x33, "razer": 0x28 },
    { "name": "'", "wooting": 0x34, "razer": 0x29 },
    { "name": "Backslash", "wooting": 0x31, "razer": 0x2A },
    { "name": "Left Shift", "wooting": 0xE1, "razer": 0x2C, "nuphy": 0x200 },
    { "name": "Intl Backslash", "wooting": 0x64, "razer": 0x2D },
    { "name": "Z", "wooting": 0x1D, "razer": 0x2E },
    { "name": "X", "wooting": 0x1B, "razer": 0x2F },
    { "name": "C", "wooting": 0x06, "razer": 0x30 },
    { "name": "V", "wooting": 0x19, "razer": 0x31 },
    { "name": "B", "wooting": 0x05, "razer": 0x32 },
    { "name": "N", "wooting": 0x11, "razer": 0x33 },
    { "name": "M", "wooting": 0x10, "razer": 0x34 },
    { "name": ",", "wooting": 0x36, "razer": 0x35 },
    { "name": ".", "wooting": 0x37, "razer": 0x36 },
    { "name": "/", "wooting": 0x38, "razer": 0x37 },
    { "name": "Right Shift", "wooting": 0xE5, "razer": 0x39, "nuphy": 0x2000 },
    { "name": "Left Ctrl", "wooting": 0xE0, "razer": 0x3A, "nuphy": 0x100 },
    { "name": "Left Meta", "wooting": 0xE3, "razer": 0x7F, "nuphy": 0x800 },
    { "name": "Left Alt", "wooting": 0xE2, "razer": 0x3C, "nuphy": 0x400 },
    { "name": "Space", "wooting": 0x2C, "razer": 0x3D },
    { "name": "Right Alt", "wooting": 0xE6, "razer": 0x3E, "nuphy": 0x4000 },
    { "name": "Right Meta", "wooting": 0xE7, "nuphy": 0x8000 },
    { "name": "Fn", "wooting": 0x409, "razer": 0x3B, "nuphy": 0xff05 },
    { "name": "Context Menu", "wooting": 0x65, "razer": 0x81 },
    { "name": "Right Ctrl", "wooting": 0xE4, "razer": 0x40, "nuphy": 0x1000 },
    { "name": "Print Screen", "wooting": 0x46, "razer": 0x7C },
    { "name": "Pause", "wooting": 0x48, "razer": 0x7D },
    { "name": "Scroll Lock", "wooting": 0x47, "razer": 0x7E },
    { "name": "Insert", "wooting": 0x49, "razer": 0x4B },
    { "name": "Home", "wooting": 0x4A, "razer": 0x50 },
    { "name": "Page Up", "wooting": 0x4B, "razer": 0x55 },
    { "name": "Delete", "wooting": 0x4C, "razer": 0x4C },
    { "name": "End", "wooting": 0x4D, "razer": 0x51 },
    { "name": "Page Down", "wooting": 0x4E, "razer": 0x56 },
    { "name": "Up Arrow", "wooting": 0x52, "razer": 0x53 },
    { "name": "Left Arrow", "wooting": 0x50, "razer": 0x4F },
    { "name": "Down Arrow", "wooting": 0x51, "razer": 0x54 },
    { "name": "Right Arrow", "wooting": 0x4F, "razer": 0x59 },
    { "name": "Num Lock", "wooting": 0x53, "razer": 0x5A },
    { "name": "Numpad /", "wooting": 0x54, "razer": 0x5F },
    { "name": "Numpad *", "wooting": 0x55, "razer": 0x64 },
    { "name": "Numpad -", "wooting": 0x56, "razer": 0x69 },
    { "name": "Numpad 7", "wooting": 0x5F, "razer": 0x5B },
    { "name": "Numpad 8", "wooting": 0x60, "razer": 0x60 },
    { "name": "Numpad 9", "wooting": 0x61, "razer": 0x65 },
    { "name": "Numpad +", "wooting": 0x57, "razer": 0x6A },
    { "name": "Numpad 4", "wooting": 0x5C, "razer": 0x5C },
    { "name": "Numpad 5", "wooting": 0x5D, "razer": 0x61 },
    { "name": "Numpad 6", "wooting": 0x5E, "razer": 0x66 },
    { "name": "Numpad 1", "wooting": 0x59, "razer": 0x5D },
    { "name": "Numpad 2", "wooting": 0x5A, "razer": 0x62 },
    { "name": "Numpad 3", "wooting": 0x5B, "razer": 0x67 },
    { "name": "Numpad Enter", "wooting": 0x58, "razer": 0x6C },
    { "name": "Numpad 0", "wooting": 0x62, "razer": 0x63 },
    { "name": "Numpad .", "wooting": 0x63, "razer": 0x68 }
];
const wooting_to_name = {}; Object.values(keys).forEach(key => wooting_to_name[key.wooting] = key.name);
const razer_to_wooting = {}; Object.values(keys).forEach(key => razer_to_wooting[key.razer] = key.wooting);
const nuphy_to_wooting = {}; Object.values(keys).forEach(key => nuphy_to_wooting[key.nuphy ?? key.wooting] = key.wooting);

class AsProvider
{
    constructor(dev)
    {
        this.dev = dev;
    }

    getProductName()
    {
        return this.dev.productName;
    }

    forget()
    {
        this.stopListening();
        this.dev.forget();
    }
}

class AsProviderWooting extends AsProvider
{
    static populateFilters(filters)
    {
        filters.push({ usagePage: 0xFF54, vendorId: 0x31E3 });
        filters.push({ usagePage: 0xFF54, vendorId: 0x03EB, productId: 0xFF01 }); // Wooting One with old firmware
        filters.push({ usagePage: 0xFF54, vendorId: 0x03EB, productId: 0xFF02 }); // Wooting Two with old firmware
    }

    startListening(handler)
    {
        this.dev.oninputreport = function(event)
        {
            const active_keys = [];
            for (let i = 0; i < event.data.byteLength; )
            {
                const scancode = (event.data.getUint8(i++) << 8) | event.data.getUint8(i++);
                if (scancode == 0)
                {
                    break;
                }
                const value = event.data.getUint8(i++);
                active_keys.push({ scancode, value: value / 255 });
            }
            handler(active_keys);
        };
    }

    stopListening()
    {
        this.dev.oninputreport = undefined;
    }
}

class AsProviderRazerHuntsman extends AsProvider
{
    static populateFilters(filters)
    {
        filters.push({ vendorId: 0x1532, productId: 0x0266, reportId: 7 }); // Razer Huntsman V2 Analog
        filters.push({ vendorId: 0x1532, productId: 0x0282, reportId: 7 }); // Razer Huntsman Mini Analog
    }

    startListening(handler)
    {
        this.dev.oninputreport = function(event)
        {
            if (event.reportId == 7)
            {
                const active_keys = [];
                for (let i = 0; i < event.data.byteLength; )
                {
                    const scancode = event.data.getUint8(i++);
                    if (scancode == 0)
                    {
                        break;
                    }
                    const value = event.data.getUint8(i++);
                    active_keys.push({
                        scancode: analogsense.razerScancodeToHidScancode(scancode),
                        value: value / 255
                    });
                }
                handler(active_keys);
            }
        };
    }

    stopListening()
    {
        this.dev.oninputreport = undefined;
    }
}

class AsProviderRazerHuntsmanV3 extends AsProvider
{
    static populateFilters(filters)
    {
        filters.push({ vendorId: 0x1532, productId: 0x02a6, reportId: 11 }); // Razer Huntsman V3 Pro
        filters.push({ vendorId: 0x1532, productId: 0x02a7, reportId: 11 }); // Razer Huntsman V3 Pro Tenkeyless
        filters.push({ vendorId: 0x1532, productId: 0x02b0, reportId: 11 }); // Razer Huntsman V3 Pro Mini
    }

    startListening(handler)
    {
        this.dev.oninputreport = function(event)
        {
            if (event.reportId == 11)
            {
                const active_keys = [];
                for (let i = 0; i < event.data.byteLength; )
                {
                    const scancode = event.data.getUint8(i++);
                    if (scancode == 0)
                    {
                        break;
                    }
                    const value = event.data.getUint8(i++);
                    i++; // unclear, might be something like "priority."
                    active_keys.push({
                        scancode: analogsense.razerScancodeToHidScancode(scancode),
                        value: value / 255
                    });
                }
                handler(active_keys);
            }
        };
    }

    stopListening()
    {
        this.dev.oninputreport = undefined;
    }
}

class AsProviderNuphy extends AsProvider
{
    static populateFilters(filters)
    {
        filters.push({ vendorId: 0x19f5, usagePage: 1, usage: 0 });
    }

    startListening(handler)
    {
        const _this = this;
        this.buffer = {};
        this.dev.oninputreport = function(event)
        {
            console.log(event.data.getUint8(0));
            if (event.data.getUint8(0) == 0xA0)
            {
                const scancode = analogsense.nuphyScancodeToHidScancode(event.data.getUint16(2));
                if (scancode != 0)
                {
                    console.log(scancode, event.data.getUint8(7));
                    if (event.data.getUint8(7) == 0)
                    {
                        delete _this.buffer[scancode];
                    }
                    else
                    {
                        _this.buffer[scancode] = event.data.getUint8(7) / 200;
                    }
                    const active_keys = [];
                    for (const [scancode, value] of Object.entries(_this.buffer))
                    {
                        active_keys.push({ scancode, value });
                    }
                    handler(active_keys);
                }
            }
        };
    }

    stopListening()
    {
        this.dev.oninputreport = undefined;
    }
}

class AsProviderDrunkdeer extends AsProvider
{
    static populateFilters(filters)
    {
        filters.push({ usagePage: 0xFF00, vendorId: 0x352D });
    }

    startListening(handler)
    {
        const _this = this;
        this.interval = setInterval(function()
        {
            const buf = new Uint8Array(63);
            buf.set([
                      0xb6, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
            ]);
            _this.dev.sendReport(0x04, buf);
        });
        this.dev.oninputreport = function(event)
        {
            const n = event.data.getUint8(3);
            if (n == 0)
            {
                this.active_keys = [];
            }
            for (let i = 4; i != event.data.byteLength; ++i)
            {
                const value = event.data.getUint8(i);
                if (value != 0)
                {
                    this.active_keys.push({
                        scancode: analogsense.drunkdeerIndexToHidScancode((n * (64 - 5)) + (i - 4)),
                        value: value / 40
                    });
                }
            }
            if (n == 2)
            {
                handler(this.active_keys);
            }
        };
    }

    stopListening()
    {
        if (this.interval)
        {
            clearInterval(this.interval);
            this.interval = undefined;
        }
        this.dev.oninputreport = undefined;
    }
}

window.analogsense = {
    providers: [
        AsProviderWooting,
        AsProviderRazerHuntsman,
        AsProviderRazerHuntsmanV3,
        AsProviderNuphy,
        AsProviderDrunkdeer,
    ],
    findProviderForDevice: function(dev)
    {
        for (const provider of analogsense.providers)
        {
            const filters = [];
            provider.populateFilters(filters);
            for (const filter of filters)
            {
                if ("vendorId" in filter && dev.vendorId != filter.vendorId)
                {
                    continue;
                }
                if ("productId" in filter && dev.productId != filter.productId)
                {
                    continue;
                }
                if ("usagePage" in filter)
                {
                    let found = false;
                    for (const collection of dev.collections)
                    {
                        if (collection.usagePage == filter.usagePage)
                        {
                            found = true;
                            break;
                        }
                    }
                    if (!found)
                    {
                        continue;
                    }
                }
                if ("reportId" in filter)
                {
                    let found = false;
                    loop1: for (const collection of dev.collections)
                    {
                        for (const inputReport of collection.inputReports)
                        {
                            if (inputReport.reportId == filter.reportId)
                            {
                                found = true;
                                break loop1;
                            }
                        }
                    }
                    if (!found)
                    {
                        continue;
                    }
                }
                return provider;
            }
        }
    },
    getDevices: async function()
    {
        const result = [];
        if ("hid" in navigator)
        {
            const devices = await navigator.hid.getDevices();
            for (const dev of devices)
            {
                const provider = analogsense.findProviderForDevice(dev);
                if (provider)
                {
                    if (!dev.opened)
                    {
                        await dev.open();
                    }
                    result.push(new provider(dev));
                }
            }
        }
        return result;
    },
    requestDevice: async function()
    {
        if ("hid" in navigator)
        {
            const filters = [];
            for (const provider of analogsense.providers)
            {
                provider.populateFilters(filters);
            }
            const devices = await navigator.hid.requestDevice({ filters });
            for (const dev of devices)
            {
                const provider = analogsense.findProviderForDevice(dev);
                if (provider)
                {
                    if (!dev.opened)
                    {
                        await dev.open();
                    }
                    return new provider(dev);
                }
            }
        }
        else
        {
            alert("Your browser does not support the WebHID API, so analog keyboard input will not be available.");
        }
        return null;
    },
    scancodeToString: function(scancode)
    {
        if (scancode in wooting_to_name)
        {
            return wooting_to_name[scancode];
        }
        return toString(scancode);
    },
    razerScancodeToHidScancode: function(scancode)
    {
        if (scancode in razer_to_wooting)
        {
            return razer_to_wooting[scancode];
        }
        console.warn("Failed to map Razer scancode to HID scancode:", scancode);
        return 0;
    },
    nuphyScancodeToHidScancode: function(scancode)
    {
        if (scancode in nuphy_to_wooting)
        {
            return nuphy_to_wooting[scancode];
        }
        console.warn("Failed to map NuPhy scancode to HID scancode:", scancode);
        return 0;
    },
    drunkdeerIndexToHidScancode(i)
    {
        switch (i)
        {
        case (0 * 21) + 0: return 0x29;   // KEY_ESCAPE
        case (0 * 21) + 2: return 0x3A;   // KEY_F1
        case (0 * 21) + 3: return 0x3B;   // KEY_F2
        case (0 * 21) + 4: return 0x3C;   // KEY_F3
        case (0 * 21) + 5: return 0x3D;   // KEY_F4
        case (0 * 21) + 6: return 0x3E;   // KEY_F5
        case (0 * 21) + 7: return 0x3F;   // KEY_F6
        case (0 * 21) + 8: return 0x40;   // KEY_F7
        case (0 * 21) + 9: return 0x41;   // KEY_F8
        case (0 * 21) + 10: return 0x42;  // KEY_F9
        case (0 * 21) + 11: return 0x43;  // KEY_F10
        case (0 * 21) + 12: return 0x44;  // KEY_F11
        case (0 * 21) + 13: return 0x45;  // KEY_F12
        case (0 * 21) + 14: return 0x4C;  // KEY_DEL

        case (1 * 21) + 0: return 0x35;   // KEY_BACKQUOTE
        case (1 * 21) + 1: return 0x1E;   // KEY_1
        case (1 * 21) + 2: return 0x1F;   // KEY_2
        case (1 * 21) + 3: return 0x20;   // KEY_3
        case (1 * 21) + 4: return 0x21;   // KEY_4
        case (1 * 21) + 5: return 0x22;   // KEY_5
        case (1 * 21) + 6: return 0x23;   // KEY_6
        case (1 * 21) + 7: return 0x24;   // KEY_7
        case (1 * 21) + 8: return 0x25;   // KEY_8
        case (1 * 21) + 9: return 0x26;   // KEY_9
        case (1 * 21) + 10: return 0x27;  // KEY_0
        case (1 * 21) + 11: return 0x2D;  // KEY_MINUS
        case (1 * 21) + 12: return 0x2E;  // KEY_EQUALS
        case (1 * 21) + 13: return 0x2A;  // KEY_BACKSPACE
        case (1 * 21) + 15: return 0x4A;  // KEY_HOME

        case (2 * 21) + 0: return 0x2B;   // KEY_TAB
        case (2 * 21) + 1: return 0x14;   // KEY_Q
        case (2 * 21) + 2: return 0x1A;   // KEY_W
        case (2 * 21) + 3: return 0x08;   // KEY_E
        case (2 * 21) + 4: return 0x15;   // KEY_R
        case (2 * 21) + 5: return 0x17;   // KEY_T
        case (2 * 21) + 6: return 0x1C;   // KEY_Y
        case (2 * 21) + 7: return 0x18;   // KEY_U
        case (2 * 21) + 8: return 0x0C;   // KEY_I
        case (2 * 21) + 9: return 0x12;   // KEY_O
        case (2 * 21) + 10: return 0x13;  // KEY_P
        case (2 * 21) + 11: return 0x2F;  // KEY_BRACKET_LEFT
        case (2 * 21) + 12: return 0x30;  // KEY_BRACKET_RIGHT
        case (2 * 21) + 13: return 0x31;  // KEY_BACKSLASH
        case (2 * 21) + 15: return 0x4B;  // KEY_PAGE_UP

        case (3 * 21) + 0: return 0x39;   // KEY_CAPS_LOCK
        case (3 * 21) + 1: return 0x04;   // KEY_A
        case (3 * 21) + 2: return 0x16;   // KEY_S
        case (3 * 21) + 3: return 0x07;   // KEY_D
        case (3 * 21) + 4: return 0x09;   // KEY_F
        case (3 * 21) + 5: return 0x0A;   // KEY_G
        case (3 * 21) + 6: return 0x0B;   // KEY_H
        case (3 * 21) + 7: return 0x0D;   // KEY_J
        case (3 * 21) + 8: return 0x0E;   // KEY_K
        case (3 * 21) + 9: return 0x0F;   // KEY_L
        case (3 * 21) + 10: return 0x33;  // KEY_SEMICOLON
        case (3 * 21) + 11: return 0x34;  // KEY_QUOTE
        case (3 * 21) + 13: return 0x28;  // KEY_ENTER
        case (3 * 21) + 15: return 0x4E;  // KEY_PAGE_DOWN

        case (4 * 21) + 0: return 0xE1;   // KEY_LSHIFT
        case (4 * 21) + 2: return 0x1D;   // KEY_Z
        case (4 * 21) + 3: return 0x1B;   // KEY_X
        case (4 * 21) + 4: return 0x06;   // KEY_C
        case (4 * 21) + 5: return 0x19;   // KEY_V
        case (4 * 21) + 6: return 0x05;   // KEY_B
        case (4 * 21) + 7: return 0x11;   // KEY_N
        case (4 * 21) + 8: return 0x10;   // KEY_M
        case (4 * 21) + 9: return 0x36;   // KEY_COMMA
        case (4 * 21) + 10: return 0x37;  // KEY_PERIOD
        case (4 * 21) + 11: return 0x38;  // KEY_SLASH
        case (4 * 21) + 13: return 0xE5;  // KEY_RSHIFT
        case (4 * 21) + 14: return 0x52;  // KEY_ARROW_UP
        case (4 * 21) + 15: return 0x4D;  // KEY_END

        case (5 * 21) + 0: return 0xE0;   // KEY_LCTRL
        case (5 * 21) + 1: return 0xE3;   // KEY_LMETA
        case (5 * 21) + 2: return 0xE2;   // KEY_LALT
        case (5 * 21) + 6: return 0x2C;   // KEY_SPACE
        case (5 * 21) + 10: return 0xE6;  // KEY_RALT
        case (5 * 21) + 11: return 0x409; // KEY_FN (Custom mapping)
        case (5 * 21) + 12: return 0x65;  // Key says "Menu" on it, doesn't seem to do anything.
        case (5 * 21) + 14: return 0x50;  // KEY_ARROW_LEFT
        case (5 * 21) + 15: return 0x51;  // KEY_ARROW_DOWN
        case (5 * 21) + 16: return 0x4F;  // KEY_ARROW_RIGHT
        }
        console.warn("Failed to map DrunkDeer key to HID scancode:", i);
        return 0;
    }
};
