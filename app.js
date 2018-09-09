$(function() {
	$.deskible.start({
		storage: 'session', // session or local
		theme: 'default',
		authentication: 'auth.txt',
		taskbarSnap: 'bottom', // top, bottom, left or right
		desktopColor: '#000000', // hex values only
		wallpaperScale: 'fill', // actual, fit, fill, stretch, tile
		wallpaperPosition: 'center center', 
		wallpaperURL: 'resources/wallpapers/opsforge_devgru.jpg',
		wallpapersLocal: [
			'resources/wallpapers/opsforge_devgru.jpg',
		],
		changePassURL: 'changepass.json',
		startMenu: [
			{
				icon: 'book',
				label: 'Documentation',
				sub: [
					{
						icon: 'wrench',
						id: 'docu-anvil',
						label: 'ANViL',
						options: {
						tabs: false,
						content: {
								url: 'apps/documentation/anvil.html'
							}
						}
					}, 
					{
						icon: 'wrench',
						id: 'docu-addonsi',
						label: 'Addons',
						options: {
							tabs: false,
							content: {
								url: 'apps/documentation/addons.html'
							}
						}
					}//, 
					// {
					// 	icon: 'external',
					// 	id: 'docu-plugins',
					// 	label: 'External Projects',
					// 	options: {
					// 		tabs: false,
					// 		content: {
					// 			url: 'apps/documentation/plugins.html'
					// 		}
					// 	}
					// }
				]
			},
			{
				icon: 'cube',
				label: 'Apps',
				sub: 
				[
					// {
					// 	icon: 'file text outline',
					// 	id: 'example-text',
					// 	label: 'Text Window',
					// 	options: {
					// 		tabs: false,
					// 		size: {
					// 			width: '50%',
					// 			height: '75%',
					// 			'min-height': '75%'
					// 		},
					// 		content: {
					// 			url: 'apps/examples/text.html'
					// 		}
					// 	}
					// },
					// {
					// 	icon: 'grid layout',
					// 	id: 'example-grid',
					// 	label: 'Grid Window',
					// 	options: {
					// 		tabs: true,
					// 		size: {
					// 			'width': '50%',
					// 			'height': '50%'
					// 		},
					// 		content: [{
					// 			datatab: {
					// 				tablabel: 'Data',
					// 				active: true,
					// 				url: 'apps/examples/grid.html',
					// 				loads: function(c, $w, di) {
					// 					var $rows = $w.find('.deskible-tab-content[data-tid=datatab] table tr');
					// 					$rows.find('td:last-child div.button').on('click', function() {
					// 						var $row = $(this).closest('tr');
					// 						var id = $w.attr('data-id');
					// 						var tid = $row.find('td:first-child').text();
					// 						var content = {
					// 							tablabel: tid,
					// 							url: 'apps/examples/subgrid.html'
					// 						};
					// 						di.buildContent(id, tid, content, true);
					// 						$w.find('.deskible-window-tabs li[data-tid=' + tid + ']').trigger('click');
					// 					});
					// 				}
					// 			}
					// 		}]
					// 	}
					// },
					// {
					// 	icon: 'youtube',
					// 	id: 'example-video',
					// 	label: 'Video Window',
					// 	options: {
					// 		tabs: false,
					// 		overflow: 'hidden',
					// 		size: {
					// 			width: 650,
					// 			height: 490
					// 		},
					// 		content: {
					// 			url: 'apps/examples/video.html'
					// 		}
					// 	}
					// },
					// {
					// 	icon: 'comments outline',
					// 	id: 'example-irc',
					// 	label: 'IRC Client',
					// 	options: {
					// 		tabs: false,
					// 		overflow: 'hidden',
					// 		size: {
					// 			'min-width': 900,
					// 			'min-height': 650,
					// 			width: 900,
					// 			height: 650
					// 		},
					// 		content: {
					// 			url: 'apps/examples/irc.html'
					// 		}
					// 	}
					// },
					// {
					// 	icon: 'marker',
					// 	id: 'example-maps',
					// 	label: 'Google Maps',
					// 	options: {
					// 		tabs: false,
					// 		overflow: 'hidden',
					// 		size: {
					// 			'min-width': 400,
					// 			'min-height': 300,
					// 			width: 600,
					// 			height: 500
					// 		},
					// 		content: {
					// 			url: 'apps/examples/maps.html'
					// 		}
					// 	}
					// }
					{
						icon: 'cube',
						id: 'terminal',
						label: 'Terminal Shell',
						options: {
							tabs: false,
							size: {
								width: '50%',
								height: '75%',
								'min-height': '75%'
							},
							content: {
								url: 'apps/terminal.html'
							}
						}
					},
					{
						icon: 'file text outline',
						id: 'cloud9',
						label: 'Cloud 9 IDE',
						options: {
							tabs: false,
							size: {
								width: '50%',
								height: '75%',
								'min-height': '75%'
							},
							content: {
								url: 'apps/cloud9.html'
							}
						}
					},
				]
			}//,
			// {
			// 	icon: 'announcement',
			// 	id: 'about',
			// 	label: 'About',
			// 	options: {
			// 		tabs: false,
			// 		size: {
			// 			width: 750,
			// 			height: 500
			// 		},
			// 		content: {
			// 			url: 'apps/about/index.html',
			// 		}
			// 	}
			// }
		]
	});
});
