if (Attr.val === 65535) Item.val = 'unknown'
else if (Attr.val <= 10) Item.val = 'excellent'
else if (Attr.val <= 20) Item.val = 'good'
else if (Attr.val <= 25) Item.val = 'moderate'
else if (Attr.val <= 50) Item.val = 'poor'
else if (Attr.val <= 75) Item.val = 'unhealthy'
else Item.val = 'out of scale'